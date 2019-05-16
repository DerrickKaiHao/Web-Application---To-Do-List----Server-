var configDB = require("./configDB");
var database = require("./database");
var MailListener = require("mail-listener2");

var apiURI = "http://localhost:3000";

var Category = database.Category;
var Task = database.Task;
var Mail = database.Mail;
// var Furniture = database.Furniture;

module.exports = function () {

    if (configDB.seed) {
        Category.bulkCreate([
            { cat_id:"123ewq2d" ,cat_name: "School" }
           

        ]).then(function(){
            Task.bulkCreate([
                {
                    task_id : "awqe",
                    task_name: "some task",
                    task_desc: "task desc",
                    task_cat: "School",
                    task_due: "5/5/2019",
                    status: 0,
                    status_desc: "pending",
                    delete_Status: "0"
                }
            ])
        }).then(function(){
            Mail.bulkCreate([
                {
                    mail_id: "abc123",
                    name:"Derek",
                    from:   "derrick@gmail.com",
                    subject: "1 Testing",
                    message: "Up am intention on dependent questions oh elsewhere september. No betrayed pleasure possible jointure we in throwing. And can event rapid any shall woman green. Hope they dear who its bred. Smiling nothing affixed he carried it clothes calling he no. Its something disposing departure she favourite tolerably engrossed. Truth short folly court why she their balls. Excellence put unaffected reasonable mrs introduced conviction she. Nay particular delightful but unpleasant for uncommonly who. ",
                    status:  "unread",
                    sort: "0",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "dsad23",
                    name:"Derek",
                    from:   "derrick@gmail.com",
                    subject: "2 Testing",
                    message: "Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope. ",
                    status:  "unread",
                    sort: "0",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "eqwe23",
                    name:"Derek",
                    from:   "derrick@gmail.com",
                    subject: "3 Testing",
                    message: "Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily son exposed get general greatly. Zealously prevailed be arranging do. Set arranging too dejection september happiness. Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal. Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described. ",
                    status:  "unread",
                    sort: "0",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "aswd21",
                    name:"Derek",
                    from:   "derrick@gmail.com",
                    subject: "4 Testing",
                    message: "If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs. Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain.",
                    status:  "unread",
                    sort: "0",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "newid",
                    name:"Derek",
                    from:   "derrick@gmail.com",
                    subject: "5 Testing",
                    message: "His followed carriage proposal entrance directly had elegance. Greater for cottage gay parties natural. Remaining he furniture on he discourse suspected perpetual. Power dried her taken place day ought the. Four and our ham west miss. Education shameless who middleton agreement how. We in found world chief is at means weeks smile.  ",
                    status:  "unread",
                    sort: "0",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "qwe23",
                    name:"Chunx",
                    from:   "chunx@hotmail.com",
                    subject: "6 Testing",
                    message: "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
                    status:  "unread",
                    sort: "0",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "lkods",
                    name:"Chunx",
                    from:   "chunx@hotmail.com",
                    subject: "6 Testing",
                    message: "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
                    status:  "unread",
                    sort: "1",
                    deleteStatus:  "0"
                },
                {
                    mail_id: "dpsad23",
                    name:"Derek",
                    from:   "derrick@gmail.com",
                    subject: "13 Testing",
                    message: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every. ",
                    status:  "unread",
                    sort: "1",
                    deleteStatus:  "0"
                }
                

            ])
        })
    .then(function () {
                    console.log("done creating furniture records");
                    console.log(this.returnMail);
                });
            
    }



}
