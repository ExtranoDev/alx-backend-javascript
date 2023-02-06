import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const defUserDetails = { photo: null, user: null };
  return Promise.all([uploadPhoto(), createUser()])
    .then((resp) => ({ photo: resp[0], user: resp[1] }))
    .catch(() => defUserDetails);
}
