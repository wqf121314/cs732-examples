window.addEventListener("load", () => {

    const btnGreeting = document.querySelector("#btn-greeting");
    const spanGreeting = document.querySelector("#greeting");
    const btnAdd = document.querySelector("#btn-add");
    const txtA = document.querySelector("#inp-a");
    const txtB = document.querySelector("#inp-b");
    const spanResult = document.querySelector("#result");

    btnGreeting.addEventListener("click", async () => {

        await fetch("/api/greeting")
            .then(response => response.json())
            .then(json => spanGreeting.innerHTML = json.message)
            .catch((e) => {
                console.log("---->", e)
            });
    });

    btnAdd.addEventListener("click", () => {

        fetch("/api/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                a: parseInt(txtA.value),
                b: parseInt(txtB.value)
            })
        })
            .then(response => response.json())
            .then(json => spanResult.innerHTML = json.result);

    });

});