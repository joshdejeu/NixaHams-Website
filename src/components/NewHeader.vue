<template>
    <div id="header_compress">
        <div id="burgerParentCompress">
            <div id="burgerOpen" @click="clickHeader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div id="burgerLine"></div>
        <div id="burgerOptionContainer">
            <a class="burgerA" href="#/">
                <div class="hoverOpt">Home</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-house"></i>
                    <span class="burgerTitle">Home</span>
                </div>
            </a>
            <a class="burgerA" href="#/nets">
                <div class="hoverOpt">Nets</div>
                <div class="burgerOption">
                    <i class="fas fa-walkie-talkie"></i>
                    <span class="burgerTitle">Nets</span>
                </div>
            </a>
            <a class="burgerA" href="#/repeaters">
                <div class="hoverOpt">Repeaters</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-tower-broadcast"></i>
                    <span class="burgerTitle">Repeaters</span>
                </div>
            </a>
            <a class="burgerA" href="#/meetings">
                <div class="hoverOpt">Meetings</div>
                <div class="burgerOption">
                <i class="fa-solid fa-people-group"></i>
                    <span class="burgerTitle">Meetings</span>
                </div>
            </a>
            <a class="burgerA" href="#/roster">
                <div class="hoverOpt">Join Narc | Roster</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-list"></i>
                    <span class="burgerTitle">Join Narc | Roster</span>
                </div>
            </a>
            <a class="burgerA" href="#/history">
                <div class="hoverOpt">History</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span class="burgerTitle">History</span>
                </div>
            </a>
            <a class="burgerA" href="#/dmr">
                <div class="hoverOpt">SWMO DMR Info</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-circle-info"></i>
                    <span class="burgerTitle">SWMO DMR Info</span>
                </div>
            </a>
            <a class="burgerA" href="#/bylaws">
                <div class="hoverOpt">Constitution & Bylaws</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-gavel"></i>
                    <span class="burgerTitle">Constitution & Bylaws</span>
                </div>
            </a>
            <a class="burgerA" href="#/officers">
                <div class="hoverOpt">Officers</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-person"></i>
                    <span class="burgerTitle">Officers</span>
                </div>
            </a>
            <a class="burgerA" href="#/donate">
                <div class="hoverOpt">Donate</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-credit-card"></i>
                    <span class="burgerTitle">Donate</span>
                </div>
            </a>
            <a class="burgerA" href="#/contact">
                <div class="hoverOpt">Contact</div>
                <div class="burgerOption">
                    <i class="fa-solid fa-phone"></i>
                    <span class="burgerTitle">Contact</span>
                </div>
            </a>
            <div id="header_logo_container">
                <a href="#/">
                    <img src="../assets/logobottom.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NewHeader',
    props: [],
    data() {
        return {
            class: false,
            ham_active: false,
            headerMode: false,
            burgerOptionArray: [],
            routeArray: [
                '/',
                '/nets',
                '/repeaters',
                '/meetings',
                '/roster',
                '/history',
                '/dmr',
                '/bylaws',
                '/officers',
                '/donate',
                '/contact'
            ],
            viewTypeMobile: false,
        }
    },
    methods: {
        clickHeader()
        {
            //false = compressed
            //true = expanded
            if(!this.headerMode)
            {
                try {
                    if(this.viewTypeMobile){
                        document.getElementById('burgerOpen').id = "burgerClose";
                        document.getElementById('mobileBuger').id = "header_expand";
                        document.getElementById('burgerParentCompress').id = "burgerParentExpand";
                    }
                    else{
                        document.getElementById('burgerOpen').id = "burgerClose";
                        document.getElementById('header_compress').id = "header_expand";
                        document.getElementById('burgerParentCompress').id = "burgerParentExpand";
                    }
                } catch (e) {
                    console.warn(e)
                }
                this.headerMode = true;
            }
            else if(this.headerMode)
            {
                try {
                    if(this.viewTypeMobile)
                    {
                        document.getElementById('burgerClose').id = "burgerOpen";
                        document.getElementById('header_expand').id = "mobileBuger";
                        document.getElementById('burgerParentExpand').id = "burgerParentCompress";
                    }
                    else{
                        document.getElementById('burgerClose').id = "burgerOpen";
                        document.getElementById('header_expand').id = "header_compress";
                        document.getElementById('burgerParentExpand').id = "burgerParentCompress";
                    }
                } catch (e) {
                    console.warn(e)
                }
                this.headerMode = false;
            }
        },
        hoverHeader()
        {
            try {
                document.getElementById('burgerOpen').id = "burgerClose";
            } catch (e) {
                console.warn(e)
            }
        },
        hoverHeaderExit(){
            try {
                document.getElementById('burgerClose').id = "burgerOpen";
            } catch (e) {
                console.warn(e)
            }
        },
        test(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                // true for mobile device
                let header;
                try {
                    header = document.getElementById('header_compress');
                } catch (error) {
                    error;
                    header = document.getElementById('header_expand'); 
                }
                header.id = 'mobileBuger';
                this.viewTypeMobile = true;
                return "mobile device";
            }else{
            // false for not mobile device
                this.viewTypeMobile = false;
                return "not mobile device";
            }
        }
    },
    mounted() {
        this.burgerOptionArray = document.getElementsByClassName('burgerA');
        let pth = this.$route.path;
        let i = this.routeArray.indexOf(pth);
        this.burgerOptionArray[i].id = "activeBurger";
        
        this.test()
    },
    created(){
    },
    watch: {
        $route(to, from) {
            from;
            let i = this.routeArray.indexOf(to.path);
            for(let j = 0; j < this.burgerOptionArray.length; j++)
            {
                this.burgerOptionArray[j].id = "inactiveBurger"; 
            }
            this.burgerOptionArray[i].id = "activeBurger";
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mobileBuger{
    background-color: #101022;
    width: 70px;
    height: 70px;
    position: fixed;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 2em;
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
}
#mobileBuger>#burgerOptionContainer{
    /* background-color: red; */
    visibility: hidden;
    pointer-events: none;
    user-select: none;
}
.burgerA{position: relative;}
.burgerA:hover>.hoverOpt{
    background-color: inherit;
    color: inherit;
    visibility: visible;
}
.hoverOpt,#header_#burgerOptionContainer>a>.hoverOpt:hover,#header_expand>#burgerOptionContainer>a>.hoverOpt{
    visibility: hidden;
    color: transparent;
    position: absolute;
    padding: 10px;
    border-radius: 5px;
    width: fit-content; height: 60%;
    background-color: transparent;
    left: 70px;
    display: flex;
    white-space: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border: 1px solid rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
}
#header_compress{
    background-color: #101022;
    width: 90px;
    height: 100%;
    position: fixed;
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    border-right: 1px solid white;
}
#header_expand{
    background-color: #101022;
    width: 300px;
    height: 100%;
    position: fixed;
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    /* transition: 0.4s ease; */
    border-right: 1px solid white;
}
#header_compress>#burgerOptionContainer>a{
    justify-content: center;
    padding: 10px;
    width: 75%;
    margin-left: 12.5%;
    aspect-ratio: 1 / 1;
}
#header_expand>#burgerOptionContainer>a{
    justify-content: flex-start;
    padding: 0 10px 0 15px;
    font-size: 0.8em;
    font-weight: bold;
}

#header_compress>#burgerOptionContainer>a>.burgerOption>span{
    color: transparent;
    position: absolute;
    z-index: -1;
    font-size: 0;
    visibility: hidden;
    transform: scale(0);
}
#header_expand>#burgerOptionContainer>a>.burgerOption>span{
    position: relative;
    z-index: inherit;
    margin-left: 20px;
}
a{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
}
#burgerOptionContainer{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(12,1fr) 4fr;
    position: relative;
}
#burgerOptionContainer>a{
    margin-top: 10px;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* transition: 0.2s ease; */
}
#inactiveBurger{
    background-color: rgba(255, 255, 255,0); 
    color: white;
}
#activeBurger{
    background-color: rgba(255, 255, 255,1); 
    color: black;
}
#burgerOptionContainer>a:hover{
    background-color: rgba(255, 255, 255,1); 
    color: black;
}
.burgerOption{
    font-size: 1.1em;
    font-weight: normal;
    font-family: 'Montserrat';
}
#burgerLine{
    width: 100%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    margin-top: 20px;
}
#burgerParentCompress{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transition: 0.2s ease; */
}
#burgerParentExpand{
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 0.2s ease;
}
#burgerOpen{
    width: 25px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.4s ease;
}
#burgerOpen:hover,#burgerClose:hover{
    transform: scale(1.1);
}
a,a:hover,a:active,a:visited{
    color: inherit;
}
#burgerClose{
    width: 30px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: space-around; 
    align-items: flex-end;
    flex-direction: column;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.2s ease;
}
#burgerClose>div:nth-child(1)
{
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 50px;
}
#burgerClose>div:nth-child(2)
{
    width: 80%;
    height: 2px;
    background-color: white;
    border-radius: 50px;
    transition: 0.1s ease;
}
#burgerClose>div:nth-child(3)
{
    width: 60%;
    height: 2px;
    background-color: white;
    border-radius: 50px;
    transition: 0.1s ease;
}
#burgerOpen>div{
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 50px;
    transition: 0.4s ease;
}
#header_compress>div>#header_logo_container{
    visibility: hidden;
}
#header_expand>div>#header_logo_container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
#header_logo_container>a{
    object-fit: cover;
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
#header_logo_container>a>img{
    object-fit: cover;
    width: 100%;
}


/* Slightly Resized Screen Styles */
@media screen and (max-width: 1200px) {

}



/* Half-Screen Styles */
@media screen and (max-width: 900px) {

}

/* Mobile Styles */
@media screen and (max-width: 768px) {

}
</style>
