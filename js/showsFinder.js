const form = document.querySelector("#search-form");
const containerPoster = document.querySelector("#container-poster");
const containerPreview = document.querySelector("#container-preview");

function getDataSearchShows(shows) {
    if (document.querySelector("#container-data-shows")) {
        document.querySelector("#container-caption-result").remove();
        document.querySelector("#container-data-shows").remove();
    }

    const containerCaptionResult = document.createElement("div");
    containerCaptionResult.setAttribute("id", "container-caption-result");
    
    const thead = document.createElement("h3");
    thead.innerText = "# Result";

    const hr = document.createElement("hr");
    const containerResult = document.createElement("div");
    containerResult.classList.add("row");
    containerResult.setAttribute("id", "container-data-shows");

    containerCaptionResult.insertAdjacentElement("beforeend", thead);
    containerCaptionResult.insertAdjacentElement("beforeend", hr);
    containerPoster.insertAdjacentElement("beforeend", containerCaptionResult);
    containerPoster.insertAdjacentElement("beforeend", containerResult);

    let numberOfmodal = 1;

    for (const data of shows) {
        if (data.show.image) {
            const parentCard = document.createElement("div");
            parentCard.classList.add("col-sm-12");
            parentCard.classList.add("col-md-6");
            parentCard.classList.add("col-lg-4");

            const divCard = document.createElement("div");
            divCard.classList.add("card");
            divCard.classList.add("mx-auto");
            divCard.classList.add("mb-2");
            divCard.setAttribute("style", "width: 18rem; height: 40em;");

            const img = document.createElement("img");
            img.src = data.show.image.original;
            img.classList.add("card-img-top");
            img.setAttribute("alt", `Image ${data.show.name}`);
            img.setAttribute("style", "height: 25em;");

            const divCardBody = document.createElement("div");
            divCardBody.classList.add("card-body");

            const divCardTitle = document.createElement("div");
            divCardTitle.setAttribute("style", "height: 3em;");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = (data.show.name.length > 40) ? data.show.name.substring(0, 40).concat("...") : data.show.name;

            const divSummaryDescription = document.createElement("div");
            divSummaryDescription.setAttribute("style", "height: 5em;");

            const summaryDescription = document.createElement("p");
            summaryDescription.classList.add("card-text");

            const divBtnFullDesc = document.createElement("div");
            divBtnFullDesc.setAttribute("style", "height: 1.5em;");

            const btnFullDesc = document.createElement("a");
            btnFullDesc.classList.add("link-primary");
            btnFullDesc.setAttribute("role", "button");
            btnFullDesc.setAttribute("data-bs-toggle", "modal");
            btnFullDesc.setAttribute("data-bs-target", `#staticBackdrop${numberOfmodal}`);
            btnFullDesc.innerText = "Lihat Selengkapnya";

            const modalFade = document.createElement("div");
            modalFade.classList.add("modal");
            modalFade.classList.add("fade");
            modalFade.setAttribute("id", `staticBackdrop${numberOfmodal}`);
            modalFade.setAttribute("data-bs-backdrop", "static");
            modalFade.setAttribute("data-bs-keyboard", "false");
            modalFade.setAttribute("tabindex", "-1");
            modalFade.setAttribute("aria-labelledby", "staticBackdropLabel");
            modalFade.setAttribute("aria-hidden", "true");

            const modalDialog = document.createElement("div");
            modalDialog.classList.add("modal-dialog");

            const modalContent = document.createElement("div");
            modalContent.classList.add("modal-content");

            const modalHeader = document.createElement("div");
            modalHeader.classList.add("modal-header");

            const modalHeaderTitle = document.createElement("h1");
            modalHeaderTitle.classList.add("modal-title");
            modalHeaderTitle.classList.add("fs-5");
            modalHeaderTitle.setAttribute("id", "staticBackdropLabel")
            modalHeaderTitle.innerText = data.show.name;

            const btnModalHeaderClose = document.createElement("button");
            btnModalHeaderClose.classList.add("btn-close");
            btnModalHeaderClose.setAttribute("type", "button");
            btnModalHeaderClose.setAttribute("data-bs-dismiss", "modal");
            btnModalHeaderClose.setAttribute("aria-label", "Close");

            const modalBody = document.createElement("div");
            modalBody.classList.add("modal-body");
            modalBody.innerHTML = data.show.summary;
            
            const description = data.show.summary + " ";
            const textSummaryDescription = (description.length > 70) ? data.show.summary.substring(0, 70).concat("...", "</p>") : data.show.summary;
            summaryDescription.innerHTML = textSummaryDescription;

            const divBtnOfficialSite = document.createElement("div");
            divBtnOfficialSite.classList.add("mt-2");

            const btnOfficialSite = document.createElement("a");
            btnOfficialSite.classList.add("btn");
            btnOfficialSite.classList.add("btn-primary");

            if (data.show.officialSite == null || data.show.officialSite == undefined) {
                btnOfficialSite.classList.add("disabled");
                btnOfficialSite.innerText = "Official Site";
            }

            btnOfficialSite.href = data.show.officialSite;
            btnOfficialSite.setAttribute("target", "_blank");
            btnOfficialSite.innerText = "Official Site";

            containerResult.insertAdjacentElement("beforeend", parentCard);
            parentCard.insertAdjacentElement("beforeend", divCard);
            divCard.insertAdjacentElement("beforeend", img);
            divCard.insertAdjacentElement("beforeend", divCardBody);
            divCardBody.insertAdjacentElement("beforeend", divCardTitle);
            divCardTitle.insertAdjacentElement("beforeend", cardTitle);
            divCardBody.insertAdjacentElement("beforeend", divSummaryDescription);
            divSummaryDescription.insertAdjacentElement("beforeend", summaryDescription);
            divCardBody.insertAdjacentElement("beforeend", divBtnFullDesc);
            divBtnFullDesc.insertAdjacentElement("beforeend", btnFullDesc);
            
            summaryDescription.insertAdjacentElement("beforeend", modalFade);
            modalFade.insertAdjacentElement("beforeend", modalDialog);
            modalDialog.insertAdjacentElement("beforeend", modalContent);
            modalContent.insertAdjacentElement("beforeend", modalHeader);
            modalHeader.insertAdjacentElement("beforeend", modalHeaderTitle);
            modalHeader.insertAdjacentElement("beforeend", btnModalHeaderClose);
            modalContent.insertAdjacentElement("beforeend", modalBody);

            divCardBody.insertAdjacentElement("beforeend", divBtnOfficialSite);
            divBtnOfficialSite.insertAdjacentElement("beforeend", btnOfficialSite);

            numberOfmodal++;
        }
    }
}

function dataSearchIsNotFound() {
    if (document.querySelector("#container-data-shows")) {
        document.querySelector("#container-caption-result").remove();
        document.querySelector("#container-data-shows").remove();
    }

    const containerCaptionResult = document.createElement("div");
    containerCaptionResult.setAttribute("id", "container-caption-result");
    
    const thead = document.createElement("h3");
    thead.innerText = "# Result";

    const hr = document.createElement("hr");
    const containerResult = document.createElement("div");
    containerResult.setAttribute("id", "container-data-shows");

    const alertNotFound = document.createElement("div");
    alertNotFound.classList.add("alert");
    alertNotFound.classList.add("alert-warning");
    alertNotFound.setAttribute("role", "alert");
    alertNotFound.innerText = "OOPS! Sorry, an error has occured, Requested data not found!";

    containerCaptionResult.insertAdjacentElement("beforeend", thead);
    containerCaptionResult.insertAdjacentElement("beforeend", hr);
    containerPoster.insertAdjacentElement("beforeend", containerCaptionResult);
    containerPoster.insertAdjacentElement("beforeend", containerResult);
    containerResult.insertAdjacentElement("beforeend", alertNotFound);
}

function fetchDataError() {
    if (document.querySelector("#container-data-shows")) {
        document.querySelector("#container-caption-result").remove();
        document.querySelector("#container-data-shows").remove();
    }

    const containerCaptionResult = document.createElement("div");
    containerCaptionResult.setAttribute("id", "container-caption-result");
    
    const thead = document.createElement("h3");
    thead.innerText = "# Result";

    const hr = document.createElement("hr");
    const containerResult = document.createElement("div");
    containerResult.setAttribute("id", "container-data-shows");

    const alertNotFound = document.createElement("div");
    alertNotFound.classList.add("alert");
    alertNotFound.classList.add("alert-danger");
    alertNotFound.setAttribute("role", "alert");
    alertNotFound.innerText = "OOPS! Sorry, an error has occurred, The requested data failed!";

    containerCaptionResult.insertAdjacentElement("beforeend", thead);
    containerCaptionResult.insertAdjacentElement("beforeend", hr);
    containerPoster.insertAdjacentElement("beforeend", containerCaptionResult);
    containerPoster.insertAdjacentElement("beforeend", containerResult);
    containerResult.insertAdjacentElement("beforeend", alertNotFound);
}

function fetchDataRecommendationError() {
    const thead = document.createElement("h3");
    thead.innerText = "# Recommendation";

    const hr = document.createElement("hr");

    const containerMessage = document.createElement("div");
    containerMessage.classList.add("container");
    containerMessage.classList.add("flex-grow-1");

    const containerMessageInner = document.createElement("div");
    containerMessageInner.classList.add("p-5");
    containerMessageInner.classList.add("text-center");

    const headText1 = document.createElement("h1");
    headText1.classList.add("fw-bold");
    headText1.innerText = "OPPS!";

    const headText2 = document.createElement("h2");
    headText2.classList.add("fw-bold");
    headText2.innerText = "Error : 404 Not Found";
    
    const textError = document.createElement("p");
    textError.innerText = "OOPS! Sorry, an error has occurred, The requested data failed!";

    containerPreview.insertAdjacentElement("beforeend", thead);
    containerPreview.insertAdjacentElement("beforeend", hr);

    document.querySelector("main").insertAdjacentElement("beforeend", containerMessage);
    containerMessage.insertAdjacentElement("beforeend", containerMessageInner);
    containerMessageInner.insertAdjacentElement("beforeend", headText1);
    containerMessageInner.insertAdjacentElement("beforeend", headText2);
    containerMessageInner.insertAdjacentElement("beforeend", textError);
}

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const submitedKeyword = form.elements["query-poster"].value;

    const config = {
        params: {
            q: submitedKeyword
        }
    };

    try {
        const response = await axios("https://api.tvmaze.com/search/shows", config);
        
        if (response.data.length < 1) {
            dataSearchIsNotFound();
        } else {
            getDataSearchShows(response.data);
            form.elements["query-poster"].value = "";
        }
    } catch(err) {
        fetchDataError();
    }
});

addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios("https://api.tvmaze.com/shows");

        const thead = document.createElement("h3");
        thead.innerText = "# Recommendation";

        const hr = document.createElement("hr");
        const containerRowPreview = document.createElement("div");
        containerRowPreview.classList.add("row");

        containerPreview.insertAdjacentElement("beforeend", thead);
        containerPreview.insertAdjacentElement("beforeend", hr);
        containerPreview.insertAdjacentElement("beforeend", containerRowPreview);

        let numberOfmodal = 1;
        let sizeOfData = response.data.length;
        let listIndex = [];

        for (let data of response.data) {
            const randomIndex = Math.floor(Math.random() * parseInt(sizeOfData)) - 1;
            const isRegistered = randomIndex in listIndex;

            if (listIndex.length < 6) {
                if (!isRegistered) {
                    if (response.data[randomIndex].image) {
                        listIndex.push(randomIndex);

                        const parentCard = document.createElement("div");
                        parentCard.classList.add("col-sm-12");
                        parentCard.classList.add("col-md-6");
                        parentCard.classList.add("col-lg-4");
    
                        const divCard = document.createElement("div");
                        divCard.classList.add("card");
                        divCard.classList.add("mx-auto");
                        divCard.classList.add("mb-2");
                        divCard.setAttribute("style", "width: 18rem; height: 40em;");
    
                        const img = document.createElement("img");
                        img.src = response.data[randomIndex].image.original;
                        img.classList.add("card-img-top");
                        img.setAttribute("alt", `Image ${response.data[randomIndex].name}`);
                        img.setAttribute("style", "height: 25em;");
    
                        const divCardBody = document.createElement("div");
                        divCardBody.classList.add("card-body");
    
                        const divCardTitle = document.createElement("div");
                        divCardTitle.setAttribute("style", "height: 3em;");
    
                        const cardTitle = document.createElement("h5");
                        cardTitle.classList.add("card-title");
                        cardTitle.innerText = response.data[randomIndex].name;
    
                        const divSummaryDescription = document.createElement("div");
                        divSummaryDescription.setAttribute("style", "height: 5em;");
    
                        const summaryDescription = document.createElement("p");
                        summaryDescription.classList.add("card-text");
    
                        const divBtnFullDesc = document.createElement("div");
                        divBtnFullDesc.setAttribute("style", "height: 1.5em;");
    
                        const btnFullDesc = document.createElement("a");
                        btnFullDesc.classList.add("link-primary");
                        btnFullDesc.setAttribute("role", "button");
                        btnFullDesc.setAttribute("data-bs-toggle", "modal");
                        btnFullDesc.setAttribute("data-bs-target", `#staticBackdropPreview${numberOfmodal}`);
                        btnFullDesc.innerText = "Lihat Selengkapnya";
    
                        const modalFade = document.createElement("div");
                        modalFade.classList.add("modal");
                        modalFade.classList.add("fade");
                        modalFade.setAttribute("id", `staticBackdropPreview${numberOfmodal}`);
                        modalFade.setAttribute("data-bs-backdrop", "static");
                        modalFade.setAttribute("data-bs-keyboard", "false");
                        modalFade.setAttribute("tabindex", "-1");
                        modalFade.setAttribute("aria-labelledby", "staticBackdropPreviewLabel");
                        modalFade.setAttribute("aria-hidden", "true");
    
                        const modalDialog = document.createElement("div");
                        modalDialog.classList.add("modal-dialog");
    
                        const modalContent = document.createElement("div");
                        modalContent.classList.add("modal-content");
    
                        const modalHeader = document.createElement("div");
                        modalHeader.classList.add("modal-header");
    
                        const modalHeaderTitle = document.createElement("h1");
                        modalHeaderTitle.classList.add("modal-title");
                        modalHeaderTitle.classList.add("fs-5");
                        modalHeaderTitle.setAttribute("id", "staticBackdropPreviewLabel")
                        modalHeaderTitle.innerText = response.data[randomIndex].name;
    
                        const btnModalHeaderClose = document.createElement("button");
                        btnModalHeaderClose.classList.add("btn-close");
                        btnModalHeaderClose.setAttribute("type", "button");
                        btnModalHeaderClose.setAttribute("data-bs-dismiss", "modal");
                        btnModalHeaderClose.setAttribute("aria-label", "Close");
    
                        const modalBody = document.createElement("div");
                        modalBody.classList.add("modal-body");
                        modalBody.innerHTML = response.data[randomIndex].summary;
                        
                        const description = response.data[randomIndex].summary + " ";
                        const textSummaryDescription = (description.length > 70) ? response.data[randomIndex].summary.substring(0, 70).concat("...", "</p>") : response.data[randomIndex].summary;
                        summaryDescription.innerHTML = textSummaryDescription;
    
                        const divBtnOfficialSite = document.createElement("div");
                        divBtnOfficialSite.classList.add("mt-2");
    
                        const btnOfficialSite = document.createElement("a");
                        btnOfficialSite.classList.add("btn");
                        btnOfficialSite.classList.add("btn-primary");

                        if (response.data[randomIndex].officialSite == null || response.data[randomIndex].officialSite == undefined) {
                            btnOfficialSite.classList.add("disabled");
                            btnOfficialSite.innerText = "Official Site";
                        }

                        btnOfficialSite.href = response.data[randomIndex].officialSite;
                        btnOfficialSite.setAttribute("target", "_blank");
                        btnOfficialSite.innerText = "Official Site";
    
                        containerRowPreview.insertAdjacentElement("beforeend", parentCard);
                        parentCard.insertAdjacentElement("beforeend", divCard);
                        divCard.insertAdjacentElement("beforeend", img);
                        divCard.insertAdjacentElement("beforeend", divCardBody);
                        divCardBody.insertAdjacentElement("beforeend", divCardTitle);
                        divCardTitle.insertAdjacentElement("beforeend", cardTitle);
                        divCardBody.insertAdjacentElement("beforeend", divSummaryDescription);
                        divSummaryDescription.insertAdjacentElement("beforeend", summaryDescription);
                        divCardBody.insertAdjacentElement("beforeend", divBtnFullDesc);
                        divBtnFullDesc.insertAdjacentElement("beforeend", btnFullDesc);
    
                        summaryDescription.insertAdjacentElement("beforeend", modalFade);
                        modalFade.insertAdjacentElement("beforeend", modalDialog);
                        modalDialog.insertAdjacentElement("beforeend", modalContent);
                        modalContent.insertAdjacentElement("beforeend", modalHeader);
                        modalHeader.insertAdjacentElement("beforeend", modalHeaderTitle);
                        modalHeader.insertAdjacentElement("beforeend", btnModalHeaderClose);
                        modalContent.insertAdjacentElement("beforeend", modalBody);
    
                        divCardBody.insertAdjacentElement("beforeend", divBtnOfficialSite);
                        divBtnOfficialSite.insertAdjacentElement("beforeend", btnOfficialSite);
    
                        numberOfmodal++;
                    }
                }
            }
        }
    } catch(err) {
        fetchDataRecommendationError();
    }
});