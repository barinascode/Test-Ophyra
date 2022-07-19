import { Store } from "react-notifications-component";

interface INotificationPayload {
    title: string;
    message:string; 
    type: 'success' | 'danger' | 'warning';
}

export default class Notification {
    
    public static dispath(payload:INotificationPayload){
        Store.addNotification({
            title: payload.title,
            message: payload.message,
            type: payload.type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
    }
}