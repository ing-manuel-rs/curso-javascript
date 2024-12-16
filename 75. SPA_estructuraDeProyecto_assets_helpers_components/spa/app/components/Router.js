import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { Postcard } from "./PostCard.js";
import { SearchCart } from "./SearchCard.js";

export async function Router(){
    const d = document, 
        w = window,
        $main = d.getElementById("main");

    let {hash} = location;

    $main.innerHTML = null;
    

    if(!hash || hash === "#/"){ //home
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                // console.log(posts);
                let html = "";
                posts.forEach(post => {
                    html += Postcard(post);
                });
                $main.innerHTML = html;
            }
        });
    }else if(hash.includes("#/search")){ //search
        let query = localStorage.getItem("wpSearch");
        if(!query) {
            d.querySelector(".loader").style.display = "none";
            return false
        };
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                let html = "";
                if(search.length === 0){
                    html = `
                        <p class="error">
                            No existen resultados para el termino <mark>${query}</mark>
                        </p>
                    `;
                }else{
                    search.forEach(post => html += SearchCart(post));
                }

                $main.innerHTML = html;
            }
        });
    }else if(hash === "#/contacto"){ //contacto
        $main.appendChild(ContactForm());
    }else{ //post
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                console.log(post);
                $main.innerHTML = Post(post);
            }
        });
    }

    d.querySelector(".loader").style.display = "none";
    
}