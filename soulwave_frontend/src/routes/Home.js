import { Icon } from "@iconify/react";
import IconText from "../components/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const  focusCardsData=[
    {
        title:"Peaceful Piano",
        description:"Relax and indulge with beautiful piano pieces.",
        imgUrl:"https://img.apmcdn.org/96e4b071527d8d0037912c33b4ad58d122800190/square/ad6adf-20180724-music-therapy-03.jpg"
    },
    {
        title:"Deep Focus",
        description: "Keep calm and focus with this music.",
        imgUrl: "https://cdn.prod.website-files.com/5fce0f6bc9af69423eefaa13/65de07a9ebc19bf50807152b_image%20(1).webp"
    },{
        title:"Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500,h_430/https://vidyavalley.com/wp-content/uploads/2020/05/Instrumental-Music-Final-500x430.jpg"
    },{
        title:"Focus Flow",
        description: "Up temp hip hop beats.",
        imgUrl: "https://cdn-images.dzcdn.net/images/cover/2609ca837c335fa6995b8b86e5b8f5a9/500x500-000000-80-0-0.jpg"
    },{
        title:"Beats To Think To",
        description: "Focus with deep techno and tech house.",
        imgUrl: "https://cacmb4.acm.org/system/assets/0002/8669/091317_blogspotCom_musicalthinking.large.jpg?1505323421&1505323420"
    }];


    const  soulwavePlaylistsCardData=[
        {
            title:"B-Town Punjabi",
            description:"A high-energy mix of Bollywood and Punjabi beats, blending desi swag with chart-topping hits.",
            imgUrl:"https://theindianmusicdiaries.com/wp-content/smush-webp/2023/09/Karan-Aujla-Credit_-Warner-Music-Canada-India-1-scaled.jpg.webp"
        },
        {
            title:"Lofi Hits",
            description: "Chill vibes, soothing beats, and relaxing melodies to set the perfect mood.",
            imgUrl: "https://images.unsplash.com/photo-1564396797585-82f726d7d39a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },{
            title:"Party Anthems",
            description: "Non-stop bangers to keep the vibe alive and the dance floor lit.",
            imgUrl: "https://img.freepik.com/free-photo/friends-clinking-drink-glasses-modern-bar_1150-18971.jpg?t=st=1743748214~exp=1743751814~hmac=a70ee6891b8e2ab35762f070789ec987013c7c0b8dedeaf998293565b376691a&w=2000"
        },{
            title:"Bollywood Hits",
            description: "Timeless collection of chart-toppers and soulful melodies from the heart of Bollywood.",
            imgUrl: "https://yt3.googleusercontent.com/WpAmcYTCHmsfZSFdyaCQzovV2natjs4770tEEKvfGHifgfIkYF-15tltjUGGE548c4_PSHIT=s160-c-k-c0x00ffffff-no-rj"
        },{
            title:"Timeless Ragas",
            description: "A soulful journey through the elegance of classical melodies and divine rhythms.",
            imgUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mixpt3aTomNCPC2-cBlmIw.jpeg"
        }];

        const  soundsofIndia=[
            {
                title:"Sound of Mumbai",
                description:"A playlist of Bollywood chartbusters, lo-fi monsoon melodies, and classic retro tracks echoing the city’s cinematic soul.",
                imgUrl:"https://images.unsplash.com/photo-1598434192043-71111c1b3f41?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title:"Sound of Delhi",
                description: "A fusion of Punjabi beats, Sufi qawwalis, and indie hip-hop that mirrors the city’s vibrant energy.",
                imgUrl: "https://cdn.britannica.com/38/189838-050-83C7395E/India-War-Memorial-arch-New-Delhi-Sir.jpg?w=300"
            },{
                title:"Sound of Bengal",
                description: "A musical journey through Baul folk, Durga Puja anthems, and contemporary Bangla fusion that defines the state's spirit",
                imgUrl: "https://images.nativeplanet.com/webp/fit-in/600x338/img/2015/09/01-1441100310-coochbeharpalacee.jpg"
            },{
                title:"Sound of Chennai",
                description: "A blend of Carnatic ragas, Tamil film hits, and Gaana beats reflecting the cultural richness of the city.",
                imgUrl: "https://waybird.imgix.net/regions/kodak_images/000/000/221/original/Kapaleeshwarar-Temple-chennai-india-timbuktu-h1.jpg?w=1420&h=946&crop=center%20center&fit=min&dpr=1&q=50&auto=format"
            },{
                title:"Sound of Kolkata",
                description: "A soulful mix of Rabindra Sangeet, Bengali rock, and nostalgic melodies that capture the city's poetic charm.",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shahid_Minar_Kolkata_Arnab_Dutta_2011.jpg/500px-Shahid_Minar_Kolkata_Arnab_Dutta_2011.jpg"
            }];


const Home= ()=>{
    return(
        <div className="min-h-screen w-full flex ">
            {/* This first div will be the left panel */}
            <div className="w-1/5 min-h-screen bg-pink-200 flex flex-col justify-between pb-10">
                {/* { This div is for logo} */}
                <div>
                    <div className="logoDiv flex items-center p-5 px-3 logo  w-full flex justify-start">
                        <Icon
                            icon="game-icons:love-song"
                            width="100"
                            height="100"
                            style={{ color: "rgb(220, 87, 175)" }} 
                        />
                    <span style={{ display: "inline-block", marginLeft: "2px", verticalAlign: "middle", fontSize: "24px", fontWeight: "bold",marginTop: "12px"}}>
                        SoulWave
                    </span>
                    </div>

                    <div className="py-4">
                        <IconText iconName={"material-symbols:family-home-rounded"} 
                        displayText={"Home"}
                        active
                        />

                        <IconText iconName={"icon-park-twotone:search"} 
                        displayText={"Search"}
                        />

                        <IconText iconName={"proicons:library"} 
                        displayText={"Library"}
                        />
                    </div>
                    <div className="pt-5">
                        <IconText iconName={"tabler:text-plus"} 
                        displayText={"Create Playlist"}
                        />

                        <IconText iconName={"fluent-color:heart-48"} 
                        displayText={"Liked Songs"}
                        />
                    </div>
                </div>
                
                <div className="px-5">
                    <div className="border border-black w-2/5 flex  px-2 py-1 rounded-full items-center justify-center hover:border-gray cursor-pointer">
                        <Icon icon="hugeicons:globe-02"/>
                        <div className="ml-2 text-base">English</div>
                        </div>
                </div>
                
            </div>


            {/* This second div will be the right part(main content) */}
            <div className="min-h-screen w-4/5 overflow-auto">
                {/* {NavBar div} */}
                
                <div className="navbar w-full h-1/10 bg-pink-200 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r-2 border-pink-300 "></div>
                        </div>
                        
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Sign Up"}/>
                            <div className="border border-black h-2/4 flex  px-8 py-1 rounded-full items-center justify-center hover:border-gray cursor-pointer font-semibold">
                                Log In
                            </div>
                        </div>
                        
                    </div>
                </div>


                {/* {Content div} */}
                <div className="content p-8 pt-0">

                    <PlaylistView titleText="Focus" cardsData={focusCardsData}/>
                    <PlaylistView titleText="SoulWave Playlists" cardsData={soulwavePlaylistsCardData}/>
                    <PlaylistView titleText="Sound of India" cardsData={soundsofIndia}/>
                </div>
            </div>
        </div>
    )
};

const PlaylistView =({titleText, cardsData}) => {
    return <div className="mt-8">
        <div className="text-2xl font-semibold mb-5">{titleText}</div>
        <div className="w-full flex justify-between space-x-4">
            {
                //Cards data will be an array
                cardsData.map(item=>{
                    return <Card 
                        title={item.title} 
                        description={item.description} 
                        imgUrl={item.imgUrl}
                    />
                })
            }
            {/* <Card title="Peaceful Piano" description="Relax and indulge with beautiful piano pieces." 
                imgUrl="https://img.apmcdn.org/96e4b071527d8d0037912c33b4ad58d122800190/square/ad6adf-20180724-music-therapy-03.jpg"
            />
            <Card title="Deep Focus" description="Keep calm and focus with this music."
                imgUrl="https://cdn.prod.website-files.com/5fce0f6bc9af69423eefaa13/65de07a9ebc19bf50807152b_image%20(1).webp"
             />
            <Card title="Instrumental Study" description="Focus with soft study music in the background."
                imgUrl="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500,h_430/https://vidyavalley.com/wp-content/uploads/2020/05/Instrumental-Music-Final-500x430.jpg"
            />
            <Card title="Focus flow" description="Up temp hip hop beats." 
                imgUrl="https://cdn-images.dzcdn.net/images/cover/2609ca837c335fa6995b8b86e5b8f5a9/500x500-000000-80-0-0.jpg"
            />
            <Card title="Beats to think to" description="Focus with deep techno and tech house." 
                imgUrl="https://cacmb4.acm.org/system/assets/0002/8669/091317_blogspotCom_musicalthinking.large.jpg?1505323421&1505323420"
            /> */}
        </div>

    </div>;
};

const Card =({title,description, imgUrl}) =>{
    return (
        <div className="bg-pink-400 bg-opacity-30 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img
                    className="w-full h-40 object-cover rounded-lg"
                    src={imgUrl}
                    alt="label"
                />
            </div>
            <div className="text-md font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )
};

export default  Home;
