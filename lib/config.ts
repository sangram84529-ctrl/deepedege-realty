export const site={name:'DeepEdge Realty',phone:process.env.NEXT_PUBLIC_PHONE||'+91 99999 99999',whatsapp:process.env.NEXT_PUBLIC_WHATSAPP||'919999999999',email:process.env.NEXT_PUBLIC_EMAIL||'hello@deepedgerealty.example',address:'Mumbai, Maharashtra'};
export const wa=(message:string)=>`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
