//10
const mongoose = require('mongoose');

mongoose
.connect("mongodb://localhost:27017/mydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log('connected to database...'))
.catch(err => console.log('refuse to connect...',err));

//11
const playlistSchema=new mongoose.Schema({
    name : {
        type :String,
        required:true,
        //20 unique: true,
        //uppercse:true,
        //lowercase:true
        //trim:true
        // minlength:[2, "MINIMUM 2 LETTERS"]
        // maxlength:30
            

    
    },
    //  ctype: String,
         ctype: {
         type:String,
         required:true,
         lowercase:true,
         enum:["Frontend", "backend"]

     },
    videos:{
        // type:Number,
        // validate(value){
        //     if(value<0){
        //         throw new Error("Videos count should not be negative");
        //     }
        // }

        validate:{
            validator:function(value){
                return value.length <0
            },
            message: "videos count should not be negative"
        }

    },
    author:String,
    email:{
        type:String,
        required: true,
        unique:true,
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist=new mongoose.model("Playlist",playlistSchema);

//12
// const createDocument = async () => {
//     try{
//         const reactPlaylist= new Playlist({
//             name : "React JS",
//             ctype: "Frontend",
//             videos: 80,
//             author:"Tom",
//             active:true,
           
//         });
        
//         const result= await reactPlaylist.save();
//         console.log(result);
        
    
//     } catch(err){
//         console.log(err);
//     }
//  }
   
// createDocument();

//13

const createDocument = async () => {
    try{
        // const jsPlaylist= new Playlist({
        //     name : "JavaScript",
        //     ctype: "Frontend",
        //     videos: 80,
        //     author:"Tom",
        //     active:true,
           
        // });
        
        // const nodePlaylist= new Playlist({
        //     name : "node JS",
        //     ctype: "Backend",
        //     videos: 80,
        //     author:"Tom",
        //     active:true,
           
        // });

        const mongoPlaylist= new Playlist({
            name : "Mongoose JSS",
            ctype: "Backend",
            videos: -80,
            author:"Tom",
            email : "tom@gmail.com",
            active:true,
           
        });
        
        

        // const result= await Playlist.insertMany([jsPlaylist, nodePlaylist,mongoPlaylist,]);
        const result= await Playlist.insertMany([mongoPlaylist]);
        console.log(result);
        
    
    } catch(err){
        console.log(err);
    }
 }
   
createDocument();


//14

// const getDocument = async ()=>{
//     try{
//         //  const result = await Playlist.find();
//         // const result = await Playlist.find({ctype: "Frontend"});
//         // const result = await Playlist.find({ctype: "Frontend"}).select({name:1});
//         const result = await Playlist.find({ctype: "Frontend"})
//         .select({name:1})
//         .limit(1);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// }
// getDocument();


//15
// const getDocument = async ()=>{
//     try{
        
//         const result = await Playlist
//         // .find({videos: 80})  
//         // .find({videos: {$gt : 50}}) // we can also  use gte, lt, lte
//         .find({ctype: {$in: ["Backend", "Frontend"]}})  // we can also use not in operator
//         .select({name:1})
//         //.limit(1);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// }
// getDocument();

//16
// const getDocument = async ()=>{
//     try{
        
//         const result = await Playlist
//     //     .find({$or : [{ctype : "Backend"},
//     // {author : "Tom"}
//     // ]})

//     .find({$and : [{ctype : "Backend"},
//     {author : "Tom"}
//     ]})
//         .select({name:1})
//         //.limit(1);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// }
// getDocument();

//17
const getDocument = async ()=>{
    try{
        
        const result = await Playlist
    //     .find({$or : [{ctype : "Backend"},
    // {author : "Tom"}
    // ]})

    // .find({$and : [{ctype : "Backend"},
    // {author : "Tom"}
    // ]})
    .find({author : "Tom"})
        .select({name:1})
        //.limit(1);
        .sort({name: 1});
        //.countDocuments()
        console.log(result);
    }catch(err){
        console.log(err);
    }

}
getDocument();


//18


// const updateDocument = async (_id) =>{
//     try{
//         const result =await Playlist.findByIdAndUpdate({_id},{  //Instead of using UpdateOne we can use findByIdAndUpdate
//             $set : {
//                 name: "JS"
//             }
//         },{
//             new:true,
//             useFindAndModify:false
//         });
//         console.log(result);

//     } catch(err){
//         console.log(err);
//     }
  

// }




// updateDocument('60b7056bef04af34bc3f6558');


// //19
// // const deleteDocument= async (_id)=>{
// //     try{
// //         const result =await Playlist.deleteOne({_id})
// //         console.log(result);
// //     }catch(err){
// //         console.log(err);
// //     }
    
// // }

// // deleteDocument('60b6642cb6771322ccd1e153');


// const deleteDocument= async (_id)=>{
//     try{
//         const result =await Playlist.findByIdAndDelete({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
    
// }

// deleteDocument('60b6642cb6771322ccd1e153');

