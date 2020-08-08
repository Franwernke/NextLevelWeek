const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Francisco Wernke", 
        avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQEq7Lm63XNVqw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=Ggb75mIDQlqFsmgcMLRVfoDVWdrMtxtchW6kG9Voqwk", 
        whatsapp: "11945538999", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }
    
    classValue = {
        subject: "Química", 
        cost: "20,00"
        // o proffy id virá pelo banco de dados
    }
    
    classScheduleValues = [
        // o class_id virá pelo banco de dados
        {
            weekday: 1,
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)
    
    // consultar as classes de um determinado professor e trazer junto
    // os dados dele
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectedClassesAndProffys)

    // 

})