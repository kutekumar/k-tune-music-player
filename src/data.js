import {v4 as uuidv4} from "uuid"

function myTune() {
    return [
        {
            name: "Hereafter",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591b" +
                    "fb490ff8-1024x1024.jpg",
            artist: "Makzo",
            color: [
                "#EA8770", "#204A8C"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11767",
            //audio: "./src/mp3/001. Bijoy - I Dream Of You.mp3",
            id: uuidv4(),
            active: true
        }, {
            name: "Spiritual Mind",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46" +
                    "c2266ae3-1024x1024.jpg",
            artist: "C Y G N",
            color: [
                "#7598D1", "#D67ED7"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14986",
            id: uuidv4(),
            active: false
        }, {
            name: "Reflect",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344" +
                    "f0a7faea-1024x1024.jpg",
            artist: "SwuM, Ben Belial",
            color: [
                "#7598D1", "#D67ED7"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15234",
            id: uuidv4(),
            active: false
        }, {
            name: "Cascade",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57" +
                    "d2c34de7-1024x1024.jpg",
            artist: "Knowmadic",
            color: [
                "#90D8AB", "#FF9456"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
            id: uuidv4(),
            active: false
        }, {
            name: "Splendour",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e" +
                    "5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            color: [
                "#A1BE68", "#5D482E"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13010",
            id: uuidv4(),
            active: false
        }, {
            name: "Déjà Vu",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a8836293" +
                    "6104879a-1024x1024.jpg",
            artist: "Blue Wednesday, Shopan",
            color: [
                "#945F7E", "#AEA7DA"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11228",
            id: uuidv4(),
            active: false
        }, {
            name: "Today Feels Like Everyday",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf" +
                    "7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto",
            color: [
                "#1A1E06", "#1A5866"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12126",
            id: uuidv4(),
            active: false
        }, {
            name: "Lost Love",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41" +
                    "b34de276-1024x1024.jpg",
            artist: "Toonorth",
            color: [
                "#56A6F7", "#184040"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=2330",
            id: uuidv4(),
            active: false
        }, {
            name: "Willow",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9" +
                    "dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, Brock Berrigan, The Field Tapes",
            color: [
                "#CE5341", "#DC6636"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10260",
            id: uuidv4(),
            active: false
        }, {
            name: "Sundew",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b86379401" +
                    "0f2a9524-1024x1024.jpg",
            artist: "Delayde, Webmoms",
            color: [
                "#69B1EA", "#EB719C"
            ],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=5962",
            id: uuidv4(),
            active: false
        }
    ]
}

export default myTune;