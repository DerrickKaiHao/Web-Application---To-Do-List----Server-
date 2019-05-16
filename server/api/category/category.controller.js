var Category = require("../../database").Category;


exports.list = function (req, resp) {
        Category
            .findAll( // select * from categories
                //{attribute: ['cat_name']} - select the cat_name only
            ).then((result) => {
                resp.status(200)
                    .type("application/json")
                    .json(result); 
            }).catch((err) => {
                resp.status(500)
                    .type("application/json")
                    .json({error: true});
            });
}
// exports.create = function(req, resp) {
//     if (!req.body.info) {
//          handleErr(resp);
//      } else {
//         var newinfo = req.body.info;

//         friendList.push(newinfo);
//         resp.status(200)
//         resp.type("application/json");
//         resp.json(newinfo);
//     }
// }

exports.create = function(req,resp){
    if(!req.body.info){
        resp.status(400).json({ error: true })

    }else { // try to create the new record
        var newInfo = req.body.info;
        console.log("New Record to be inserted >>>>> " + newInfo);
        Category.create(newInfo).then((newRecord)=>{
            resp.status(200) 
                .type("application/json")
                .json(newRecord);

        }).catch((error)=>{
            console.log(error.message);
            console.log(newInfo.cat_name)
            resp.status(500) 
            .type("application/json")
            .json({error: true});

        });

    }
}

// Error handling 
function handleErr(res) {
    handleErr(res, null);
}

function handleErr(res, err) {
    console.log(err);
    res.status(500).json({error: true});
}
