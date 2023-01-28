import { notification } from 'ant-design-vue';
const antNotification = (type, message, description) => {
  notification[type]({
      message: message ? message : "",
      description: description ? description : "",
  });
};
export default antNotification;
