var Task = require("../../database").Task;
var loginInfo = [];

exports.list = function (req, resp) {
    var whereClausetask = (req.params.task_id)?{task_id:(req.params.task_id)} : {};
        Task
            .findAll( {
                where: whereClausetask
            }).then((result) => {
                resp.status(200)
                    .type("application/json")
                    .json(result); 
            }).catch((err) => {
                resp.status(500)
                    .type("application/json")
                    .json({error: true});
            });
}

exports.create = function(req,resp){
    if(!req.body.info){
        resp.status(400).json({ error: true })

    }else { // try to create the new record
        var newInfo = req.body.info;
        console.log("New Record to be inserted >>>>> " + newInfo);
        Task.create(newInfo).then((newRecord)=>{
            resp.status(200) 
                .type("application/json")
                .json(newRecord);

        }).catch((error)=>{
            console.log(error.message);
            resp.status(500) 
            .type("application/json")
            .json({error: true});

        });

    }
}

exports.update = function(req, resp){
    if(!req.body.info){
        resp.status(400).json({error : true })

    }else {
        var updateInfo = req.body.info;
        var whereClausetask = (req.params.task_id)?{task_id:(req.params.task_id)} : {};
        
        Task.update(
            updateInfo,
            {where: whereClausetask}
        ).then((result)=>{
            resp.status(200)
                .type("application/json")
                .json(result);

        }).catch((error)=>{
            resp.status(500)
                .type("application/json")
                .json({error: true})

        });
}
}
exports.destroy = function(req, resp){

   var whereClausetask = (req.params.task_id)?{task_id:(req.params.task_id)} : {};
    
    Task.destroy(
        {where: whereClausetask}
    ).then((result)=>{
        resp.status(200)
            .type("application/json")
            .json(result);

    }).catch((error)=>{
        resp.status(500)
            .type("application/json")
            .json({error: true})

    });
}


// Error handling 
function handleErr(res) {
    handleErr(res, null);
}

function handleErr(res, err) {
    console.log(err);
    res.status(500).json({error: true});
}
