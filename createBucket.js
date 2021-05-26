var AWS = require('aws-sdk');
var uuid = require('uuid');
var file = require('./package.json')

AWS.config.update({
    region: "ap-south-1",
    accessKeyId: "#",
    secretAccessKey: "#"
})
var s3 = new AWS.S3();

// var params = {
//     Bucket: 'test-s3-sdk1'
// }



//Delate Bucket
// s3.deleteBucket(params,(err,data)=>{
//     if(err){
//         console.log(err, err.stack)
//     }
//     else
//     {
//         console.log(data)
//     }
// })

// Bucket creation

// var bucketName = 'test-s3-sdk4'+uuid.v4()
// s3.createBucket({Bucket:bucketName},function(){
//     var data={
//         Bucket:bucketName,
//         Key: "test.html" 

//     };

//     s3.putObject(data,function(err,data){
//        if(err){
//            console.log(err)
//        } 
//        else
//        {
//            console.log(data)
//        }
//     })
// })


//List all buckets

s3.listBuckets((err,data)=>{
    if(err){
        console.log(err,err.stack)
    }
    else
    {
        console.log(data)
    }
})

