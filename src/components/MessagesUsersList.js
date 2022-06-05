import React, {useState, useEffect} from 'react';




const MessagesUsersList = () =>{
    const [msg, setMsg] = useState("");

    useEffect(()=>{
    fetch('https://dummyjson.com/users/1')
    .then(res => res.json())
    .then(res => {
        setMsg(res);
    })
    .catch((error)=>console.log(error))
});


	return(
<div class="users-list screen-scroll-sm">  

    
    <div class="bt-1-ddd overflow-hidden" style={{padding:"5px"}}>
        <a href="/messages/user000000" class="p-10 d-block hover-bg-eee overflow-hidden">
            <div class="pull-left mr-10 br-50 overflow-hidden" Style={{width: "50px", height: "50px", padding:"5px"}}>
                <img src='/images/user.png' alt="Firstname lastname" class="dp-cover" />
            </div>
            <div class="overflow-hidden">
                <div class="font-bold mt-5 ellipsis">
                    {msg.firstname}
                </div>
                <div class="text-fade ellipsis">
                    Hello, yeah i got your message, thank you, i will work on it
                </div>
            </div>
        </a>
    </div>
  
</div>
		)
}
export default MessagesUsersList;