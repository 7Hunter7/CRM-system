<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">
      Редактирование {{ (data as unknown as ICustomerFromState)?.name }}
    </h1>

    <form @submit="onSubmit" class="form">
      <UiInput
        type="text"
        placeholder="Наименование"
        v-model="name"
        v-bind="nameAttrs"
        class="input"
      />
      <UiInput
        type="text"
        placeholder="Email"
        v-model="email"
        v-bind="emailAttrs"
        class="input"
      />
      <UiInput
        type="text"
        placeholder="Откуда пришел?"
        v-model="fromSource"
        v-bind="fromSourceAttrs"
        class="input"
      />

      <img
        v-if="values.avatar_url || isUploadImagePanding"
        :src="values.avatar_url"
        alt="Логотип"
        width="50"
        height="50"
        class="rounded-full my-2"
      />
      <div class="grid w-full max-w-sm items-center gap-1.5 input">
        <label for="">
          <div class="text-sm mb-2">Логотип</div>
          <UiInput
            type="file"
            :onchange="(event:IinputFileEvent) => event?.target?.files?.length && 
            uploadImage(event.target.files[0])"
            :disabled="isUploadImagePanding"
          />
        </label>
      </div>

      <UiButton :disabled="isPending" variant="secondary" class="mt-3">
        {{ isPending ? "Загрузка..." : "Сохранить" }}
      </UiButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from "uuid";
import { storage } from "@/utils/appwrite";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_CUSTOMERS, STORAGE_ID } from "@/app.constants";
import type { ICustomer } from "@/types/deals.types";
import { _disabled } from "#tailwind-config/theme/aria";

interface IinputFileEvent extends Event {
  target: HTMLInputElement;
}

interface ICustomerFromState
  extends Pick<ICustomer, "avatar_url" | "email" | "name" | "from_source"> {}

useHead({
  title: "CRM System | Customers edit",
  meta: [
    {
      name: "description",
      content: "Customers edit page for the CRM System",
    },
  ],
});

const route = useRoute();
const customerId = route.params.id as string;

const { handleSubmit, defineField, setFieldValue, setValues, values } =
  useForm<ICustomerFromState>();

const { data, isSuccess } = useQuery({
  queryKey: ["get customer", customerId],
  queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId),
});

watch(isSuccess, () => {
  const initialData = data.value as unknown as ICustomerFromState;

  setValues({
    name: initialData.name,
    email: initialData.email,
    avatar_url: initialData.avatar_url,
    from_source: initialData.from_source || "",
  });
});

const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [fromSource, fromSourceAttrs] = defineField("from_source");

const { mutate, isPending } = useMutation({
  mutationKey: ["update customer", customerId],
  mutationFn: (data: ICustomerFromState) =>
    DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data),
});

const { mutate: uploadImage, isPending: isUploadImagePanding } = useMutation({
  mutationKey: ["update image"],
  mutationFn: (file: File) => storage.createFile(STORAGE_ID, uuid(), file),

  onSuccess(data) {
    const response = storage.getFileDownload(STORAGE_ID, data.$id);
    setFieldValue("avatar_url", response.href);
  },
});

const onSubmit = handleSubmit((values) => {
  mutate(values);
});
</script>

<style scoped>
.input {
  @apply border-[#161c26] mb-4 placeholder:text-[#748092] focus:border-border transition-colors;
}
</style>
