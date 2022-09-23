import { storage } from "~/server/utils/storage";

export default defineEventHandler((event) => {
  const name = decodeURIComponent(event.context.params.name);
  const { s3BucketName } = useRuntimeConfig();
  return storage().presignedPutObject(s3BucketName, name, 60);
});
