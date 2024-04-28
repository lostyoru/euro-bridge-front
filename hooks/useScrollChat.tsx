/* eslint-disable */
import { chatProfile } from "@/types/chatProfile";
import { useEffect, useRef } from "react";

const useScrollChat = (ref: React.MutableRefObject<HTMLDivElement | null>, contact: chatProfile, selectedContact: chatProfile) => {
    useEffect(() => {
        if (ref.current && contact.messages.length > 0) {
          ref.current.scrollTop = ref.current.scrollHeight;
        }
        if(ref.current && contact.messages.length == 0){
            ref.current.scrollTop = 0;
        }
      }, [contact.messages, selectedContact]);
}

export { useScrollChat }