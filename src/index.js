import { loadHeader } from "./main";

function changeSite(site) {
    switch (site) {
        case "main":
            const header = loadHeader();
            document.querySelector("#content").appendChild(header)
            break;
    }
}

let site = "main"

const header = loadHeader();
document.querySelector("#content").appendChild(header)
