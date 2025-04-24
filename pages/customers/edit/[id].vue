<template></template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { storage} from '@/utils/appwrite'
import { useMutation, useQuery } from "@tanstack/vue-query";
import { DB_ID, COLLECTION_CUSTOMERS, STORAGE_ID } from "@/app.constants";
import type { ICustomer } from "@/types/deals.types";

interface ICustomerFromState 
  extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> {};

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

const { handleSubmit, defineField, setFieldValue, setValues, values } = useForm<ICustomerFromState>();

const { data, isSuccess } = useQuery({
  queryKey: ['get customer', customerId ],
  queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId)
});

watch(isSuccess, () => {
  const initialData = data.value as unknown as ICustomerFromState

  setValues({
    name: initialData.name,
    email: initialData.email,
    avatar_url: initialData.avatar_url,
    from_source: initialData.from_source || '',
  })
});

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [fromSource, fromSourceAttrs] = defineField('from_source');
</script>
