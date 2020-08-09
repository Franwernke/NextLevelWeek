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
        subject: 1, 
        cost: "20"
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

    // O horário que a pessoa trabalha por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa der antes ou igual ao 
    // horário solicitado o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
})