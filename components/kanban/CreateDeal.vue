<template>
  <div class="text-center mb-2">
    <button
      class="transition-all opacity-10 hover:opacity-100 hover:text-[#a252c8]"
      @click="isOpenForm = !isOpenForm"
    >
      <Icon
        v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
        size="35px"
      />
      <Icon
        v-else
        name="radix-icons:plus-circled"
        class="fade-in-100 fade-out-0"
        size="35px"
      />
    </button>
  </div>
  <form v-if="isOpenForm" @submit="onSubmit" class="form">
    <UiInput
      placeholder="Наименование"
      type="text"
      v-model="name"
      v-bind="nameAttrs"
      class="input"
    ></UiInput>
    <UiInput
      placeholder="Стоимость"
      type="text"
      v-model="price"
      v-bind="priceAttrs"
      class="input"
    ></UiInput>
    <UiInput
      placeholder="Email"
      type="text"
      v-model="customerEmail"
      v-bind="customerEmailAttrs"
      class="input"
    ></UiInput>
    <UiInput
      placeholder="Компания"
      type="text"
      v-model="customerName"
      v-bind="customerNameAttrs"
      class="input"
    ></UiInput>

    <button class="btn" :disabled="isPending" type="submit">
      {{ isPending ? "Загрузка..." : "Добавить" }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";
import { v4 as uuidv4 } from "uuid";
import { COLLECTION_DEALS, DB_ID } from "@/app.constants";
import type { IDeal } from "@/types/deals.types";

const props = defineProps({
  status: {
    type: String,
    required: true,
    default: "",
  },
  refetch: {
    type: Function,
    required: true,
  },
});

const isOpenForm = ref<boolean>(false); // Состояние открытия формы

// Интерфейс формы сделки
interface IDealFormState extends Pick<IDeal, "name" | "price"> {
  customer: {
    email: string;
    name: string;
  };
  status: string;
}

const { handleSubmit, defineField, handleReset } = useForm<IDealFormState>({
  initialValues: {
    status: props.status,
  },
});

const [name, nameAttrs] = defineField("name");
const [price, priceAttrs] = defineField("price");
const [customerEmail, customerEmailAttrs] = defineField("customer.email");
const [customerName, customerNameAttrs] = defineField("customer.name");

const { mutate, isPending } = useMutation({
  mutationKey: ["create a new deal"],
  mutationFn: (data: IDealFormState) =>
    DB.createDocument(DB_ID, COLLECTION_DEALS, uuidv4(), data),
  onSuccess: () => {
    props.refetch && props.refetch(); // Обновление данных после успеш создания сделки
    handleReset(); // Сброс формы
  },
});

// Отправка данных формы
const onSubmit = handleSubmit((values) => mutate(values));
</script>

<style scoped>
.input {
  @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors;
}

.btn {
  @apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white;
}

.form {
  @apply mb-3 block;
  animation: show 0.3s ease-in-out;
}

/* Анимация появления формы */
@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: translateY(-35px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d];
  }

  to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
