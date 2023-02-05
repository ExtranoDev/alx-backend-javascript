import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resp) => {
      const struct = [];
      for (let i = 0; i < resp.length; i += 1) {
        struct.push({
          status: resp[i].status,
          value: resp[i].value || `${resp[i].reason}`,
        });
      }
      return struct;
    });
}
