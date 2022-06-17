import { extendType,  objectType } from "nexus";
import { NexusGenObjects } from "../../../nexus-typegen";

export const User = objectType({
    name: "Users", 
    definition(t) {  
        t.nonNull.int("id"); 
        t.nonNull.string("name"); 
        t.nonNull.string("email"); 
    },
});

let user : NexusGenObjects["Users"][] = [
    {
        id: 1,
        name: "Dave",
        email: "dave@gmail.com",
    },
    {
        id: 2,
        name: "Dave",
        email: "dave@gmail.com",

    }
    ,
    {
        id: 3,
        name: "Peter",
        email: "dave@gmail.com",

    }
]

export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("usersFeed", {   // 3
            type: "Users",
            resolve(parent, args, context, info) {    // 4
                return user;
            },
        });
    }
})