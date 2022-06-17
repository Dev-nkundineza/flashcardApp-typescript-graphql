import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../../nexus-typegen"; 

export const FlashCard = objectType({
    name: "FlashCard", 
    definition(t) {  
        t.nonNull.int("id"); 
        t.nonNull.string("title"); 
        t.nonNull.string("status"); 
        t.nonNull.string("flashCardMaker"); 
        t.nonNull.string("thumbnail"); 
    },
});


let flashCard : NexusGenObjects["FlashCard"][] = [
    {
        id: 1,
        title: "flashCard 1",
        status: "done",
        flashCardMaker: "Dave",
        thumbnail: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg"

    },
    {
        id: 2,
        title: "flashCard 2",
        status: "not_done",
        flashCardMaker: "John",
        thumbnail: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg"

    }
    ,
    {
        id: 3,
        title: "flashCard 3",
        status: "not_done",
        flashCardMaker: "Peter",
        thumbnail: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg"

    }
]

export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("flashCardFeed", {   // 3
            type: "FlashCard",
            resolve(parent, args, context, info) {    // 4
                return flashCard;
            },
        });
    }
})