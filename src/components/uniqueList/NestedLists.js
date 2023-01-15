import React from "react";

const Users = [
    {
      "name" : "Afroza Nisha",
      "age" : "22",
      "phones" : [{"home":"01456", "office" : "56473"}],
    },
    {
        "name" : "Meherun Lira",
        "age" : "23",
        "phones" : [{"home":"01453", "office" : "56474"}],
    },
    {
        "name" : "Reshma Shikder",
        "age" : "21",
        "phones" : [{"home":"01455", "office" : "56476"}],
    },
];

const User = () => {
    return <>
        {
            Users.map((user,index) => {
                return <div key={index}>
                    <p>FullName : {user.name}</p>
                    <p>Age : {user.age}</p>
                    {
                        user.phones.map((phone,index) => {
                            return <div>
                                <p>Home : {phone.home}</p>
                                <p>office : {phone.office}</p>
                            </div>
                        })
                    }
                </div>
            })
        }
    </>
}

export default User;