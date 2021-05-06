import { store } from 'react-notifications-component';

export const notification=(title,message,type)=>{
store.addnotification({
title: title,
message: message,
type: type,
insert: "top",
container: "top-right",
animationIn: ["animated", "fadeIn"],
animationOut: ["animated", "fadeOut"],
dismiss: {
duration: 5000,
onScreen: true
}
})
}