export const headerData = {
        name:"category",
        menuitems:[
            {
            name:"Home",
            path:"home",
            display:false
        },
            {
            name:"Courses",
            display:true,
            subMenu:[
                {
                    name:"Grid Basic Layout",
                    path:"grid-basi1"
                },
                {
                    name:"Grid Basic Layout 2",
                    path:"grid-basi2"
                },
                {
                    name:"Grid Basic Layout 3",
                    path:"grid-basi3"
                },
        ]
        },
            {
            name:"FAQs",
            path:"faqs",
            display:false,
        },
            {
            name:"About Us",
            path:"about-us",
            display:false,
        },
            {
            name:"Contact Us",
            path:"contact-us",
            display:false,
        },

    
    ],

        categoryItems:[
                    {
                    category:"Art Design",
                    subCategory:[
                                   {name:"Art Design",path:"art-desgin1"}, {name:"All Art Design",path:"art-desgin4"},
                                   {name:"Design Tools",path:"art-desgin2"}, {name:" Graphic Design",path:"art-desgin5"}, 
                                   {name:" Web Design",path:"art-desgin3"}
                                ]
                    },
                    {
                    category:"Business",
                    subCategory:[
                                 {name:"Communication",path:"art-desgin6"}, {name:"Finane",path:"art-desgin9"},
                                 {name:"Management",path:"art-desgin7"},{name:"Sales",path:"art-desgin8"}
                                ]
                    },         
            ]
    }
