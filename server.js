const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let skater = {
    'jordyn barratt': {
        'age': 23,
        'Gender' : 'Female',
        'Location': "Haleiwa HI USA", 
        'stance': 'Regular',
        'global Rank': 13,
        'Sponsers': 'Haleiwa HI USA'
       
    },
    'nyjah huston': {
        'age': 27,
        'Gender' : 'Male',
        'Location': "Huntington Beach CA USA", 
        'stance': 'goofy',
        'global Rank': 1,
        'Sponsers': 'Disorder, Monster, Diamond, Ricta, Mob, Nike SB'
       
    },
    'shane oneil': {
        'age': 32,
        'Gender' : 'Male',
        'Location': "Melbourne Australia", 
        'stance': 'goofy',
        'global Rank': 10,
        'Sponsers': 'April Skateboards, Nike SB, Thunder, Spitfire, Diamond'
    },
    'poppy starr olsen': {
        'age': 22,
        'Gender' : 'Female',
        'Location': "Newcastle Australia", 
        'stance': 'Regular',
        'global Rank': 16,
        'Sponsers': 'Vans, Ride TSG, Visa',
       
    },
    'ryan decenzo': {
        'age': 35,
        'Gender' : 'Male',
        'Location': "Huntington Beach CA USA", 
        'stance': 'goofy',
        'global Rank': 24,
        'Sponsers': 'Independent, RedBull, Bones Wheels, Red Dragons, Darkstar, Bones Swiss, OC Ramps, Grizzly Griptape, Ethika, A Lost Cause Official, FP Footwear'
       
    },
    'annie guglia': {
        'age': 31,
        'Gender' : 'Female',
        'Location': "Montreal Canada", 
        'stance': 'goofy',
        'global Rank': 183,
        'Sponsers': 'Meow Skateboards, Vans, Outlaw Skateshop, Independent Trucks, Physio Extr, Crickstart'
       
    },
    'pedro barros': {
        'age': 27,
        'Gender' : 'Male',
        'Location': "Florianopolis Brazil", 
        'stance': 'Regular',
        'global Rank': 2,
        'Sponsers': 'Red Bull, Vans, Petrobras, Oi, Evoke, Independent, Alta, Layback Beer'
       
    },
    'pamela rosa': {
        'age': 22,
        'Gender' : 'Female',
        'Location': "São José dos Campos SP Brazil", 
        'stance': 'Regular',
        'global Rank': 18,
        'Sponsers': 'Nike SB, TNT Energy Drink, G-Shock, Silver Trucks (Brazil), Mvituzzo, Bones Wheels (flow), Impulso Fisioterapia, Boulevard'
       
    },
    'alex sorgente': {
        'age': 24,
        'Gender' : 'Male',
        'Location': "Lake Worth USA", 
        'stance': 'Goofy',
        'global Rank': 4,
        'Sponsers': 'adidas, Red Bull, Spitfire, Bronson, MOB, Independent, Oakley, Grind for Life'
    },
    'zion wright': {
        'age': 23,
        'Gender' : 'Male',
        'Location': 'Jupiter FL USA',
        'stance': 'Regular',
        'global Rank': 31,
        'Sponsers': 'Real Skateboards, Vans, Thunder, Spitfire, Redbull, cbdMD, Nixon, Glassy Sunhaters, Skatepark of Tampa, Bronson, Shake Junt'
       
    },
    'ishod wair': {
        'age': 30,
        'Gender' : 'Male',
        'Location': "Bordentown NJ USA", 
        'stance': 'Goofy',
        'global Rank': 30,
        'Sponsers':' Nike SB, Real, Thunder, Spitfire, Stance, Monster, SKF, Miles, Parade World, Pacifico'
       
    },
    'dashawn jordan': {
        'age': 25,
        'Gender' : 'Male',
        'Location': "Chandler AZ USA", 
        'stance': 'goofy',
        'global Rank': 12,
        'Sponsers': 'Nike SB, Toy Machine, Spitfire, Hardies, Bones Swiss, Grizzly Grip, Thunder Trucks, Glassy, Cowtown'
    },
        'paul rodriguez': {
            'age': 37,
            'Gender' : 'Male',
            'Location': "Los Angeles CA USA", 
            'stance': 'Goofy',
            'global Rank': 95,
            'Sponsers': 'Primitive, Nike SB, Venture, JSLV'
           
        },
       'jaime foy': {
            'age': 25,
            'Gender' : 'Male',
            'Location': "Deerfield Beach FL USA", 
            'stance': 'Regular',
            'global Rank': 25,
            'Sponsers': 'New Balance Numeric, Deathwish, Red Bull, Spitfire, CCS, Island Water Sports, Thunder, Shake Junt, Dickies, Bronson, Florida Daze'
           
        },
        'mariah duran': {
            'age': 25,
            'Gender' : 'Female',
            'Location': "Albuquerque, NM USA", 
            'stance': 'goofy',
            'global Rank': 44,
            'Sponsers': 'Meow Skateboards, CHPO, Mountain Dew, Thunder Trucks, Adidas, Bones Bearings'
        },
        'tom schaar': {
            'age': 22,
            'Gender' : 'Male',
            'Location': "Malibu CA USA", 
            'stance': 'Regular',
            'global Rank': 7,
            'Sponsers': 'Element, Vans, Monster, Alta Wheels, Independent, Bronson'
           
        },
        'louie lopez': {
            'age': 27,
            'Gender' : 'Male',
            'Location': "Hawthrone CA USA", 
            'stance': 'Regular',
            'global Rank': 26,
            'Sponsers': 'Fucking Awesome, Converse, Volcom, Spitfire Wheels, Independent Trucks, SKF Bearings, Hardies Hardware, Mob Grip, New Era, Beats By Dre'
           
        },
        'curren caples': {
            'age': 37,
            'Gender' : 'Male',
            'Location': "Ventura CA USA", 
            'stance': 'Regular',
            'global Rank': 37,
            'Sponsers': 'Skate Mental, RVCA, Ace Trucks, Vans, Jessup Griptape, Momentum Ride Shop, Bones Swiss, Mountain Dew, Nixon'
           
        },
        'pedro barros': {
            'age': 27,
            'Gender' : 'Male',
            'Location': "Florianopolis Brazil", 
            'stance': 'Regular',
            'global Rank': 2,
            'Sponsers': 'Red Bull, Vans, Petrobras, Oi, Evoke, Independent, Alta, Layback Beer'
           
        },
        'cj collins': {
            'age': 22,
            'Gender' : 'Male',
            'Location': "Anaheim CA USA", 
            'stance': 'Regular',
            'global Rank': 18,
            'Sponsers': 'Vans, Toy Machine, Volcom, Red Bull, Pharmacy, Bronson, Independent, Bones Wheels'
           
        },
        'alexis sablone': {
            'age': 35,
            'Gender' : 'Female',
            'Location': "Brooklyn NY USA", 
            'stance': 'Goofy',
            'global Rank': 44,
            'Sponsers': 'Alltimers, Converse, Orchard Skate Shop, Thunder, Dialtone'
        },
        'torey pudwell': {
            'age': 32,
            'Gender' : 'Male',
            'Location': 'Simi Valley CA USA',
            'stance': 'Regular',
            'global Rank': 31,
            'Sponsers': 'Thank You Skateboards, Grizzly Griptape, Red Bull, Venture, Ghetto Child, Tech Deck, Andale'
           
        },
        'tiago lemos': {
            'age': 30,
            'Gender' : 'Male',
            'Location': "Jaguariuna SP Brazil", 
            'stance': 'Goofy',
            'global Rank': 159,
            'Sponsers':'New Balance Numeric, Primitive, Independent Trucks, Crupiê Wheels, Andale Bearings, Mob, Murk Co'
           
        },
        'yuto horigome': {
            'age': 23,
            'Gender' : 'Male',
            'Location': "Tokyo Japan", 
            'stance': 'Goofy',
            'global Rank': 11,
            'Sponsers': 'Nike SB, April Skateboards, Venture, Spitfire, Andale Bearings, Diamond, X Flag, Murasaki, Raizin'
           
        }
       
    }
    



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const skateName = request.params.name.toLowerCase()
    if(skater[skateName]){
        response.json(skater[skateName])
    }else{
        response.json(skater['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})