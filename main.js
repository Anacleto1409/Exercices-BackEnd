const { response } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000
const info = [
    {
        "id": "7dc8a8af-96dc-41aa-ae4d-1d4e132392ad",
        "user": "pcecere0",
        "title": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "paragraph": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": "803b5193-b4de-4eb9-a73f-287dddda81e8",
        "user": "pheyburn1",
        "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "paragraph": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
    },
    {
        "id": "c269dd34-2b10-4da3-94a2-bf793403bd5f",
        "user": "rpuddicombe2",
        "title": "Nulla tempus.",
        "paragraph": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
        "id": "c938000a-29a2-465e-948d-ba9579718612",
        "user": "rvonwelldun3",
        "title": "Sed ante.",
        "paragraph": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    },
    {
        "id": "82e98e90-5cd6-4752-a8f5-0acd40b97471",
        "user": "bthorbon4",
        "title": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "paragraph": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
        "id": "d60f619f-c4dd-4568-b486-1c3b8168734f",
        "user": "eshulver5",
        "title": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "paragraph": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": "05cafae5-c673-4044-8b56-0fed556409c1",
        "user": "opanther6",
        "title": "Donec ut dolor.",
        "paragraph": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    },
    {
        "id": "e22a1379-1ca6-4ab0-ab14-542990c2e906",
        "user": "jlazer7",
        "title": "Donec quis orci eget orci vehicula condimentum.",
        "paragraph": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    },
    {
        "id": "bfcbd058-7b9c-4672-8aea-4e5f9598cc1e",
        "user": "brobbey8",
        "title": "Nulla suscipit ligula in lacus.",
        "paragraph": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
    },
    {
        "id": "7c70f983-c750-43d9-a6ea-e07b6d41c9f4",
        "user": "nkevern9",
        "title": "Etiam vel augue.",
        "paragraph": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
        "id": "b6ea0518-54e6-4872-a523-7c0cf6ed8d85",
        "user": "bloyndona",
        "title": "In hac habitasse platea dictumst.",
        "paragraph": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
        "id": "c1ce2520-3a3b-4cb6-9f02-e01bc0c8ec66",
        "user": "asellwoodb",
        "title": "Maecenas tincidunt lacus at velit.",
        "paragraph": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    {
        "id": "a042a778-58bd-462e-a80e-c5024283f70e",
        "user": "jcapstickc",
        "title": "Integer ac neque.",
        "paragraph": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": "420df123-de8c-436b-9b4c-0bfe3cd24b5a",
        "user": "jgoslandd",
        "title": "Maecenas pulvinar lobortis est.",
        "paragraph": "Fusce consequat. Nulla nisl. Nunc nisl."
    },
    {
        "id": "ef075fbb-d501-4c90-8858-7bfc16f2dd5b",
        "user": "vlowlese",
        "title": "Nulla tellus.",
        "paragraph": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
    },
    {
        "id": "1a44f2f4-49b1-4029-859b-2bc509f9d200",
        "user": "amaulkinf",
        "title": "Mauris ullamcorper purus sit amet nulla.",
        "paragraph": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
        "id": "39d45f13-4b2e-4fb5-91c0-4d11f89cfeb7",
        "user": "lludmanng",
        "title": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "paragraph": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
    },
    {
        "id": "1aeea7d1-4c92-414d-b1ec-2a7e0863922f",
        "user": "dplanth",
        "title": "Pellentesque eget nunc.",
        "paragraph": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
        "id": "0d69caa5-9dae-4e0f-bfd3-8ec98b014c20",
        "user": "clewtoni",
        "title": "Fusce posuere felis sed lacus.",
        "paragraph": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
    },
    {
        "id": "cda2f350-eccd-4543-aff1-7225e5d9aa91",
        "user": "causherj",
        "title": "Vivamus vestibulum sagittis sapien.",
        "paragraph": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    },
    {
        "id": "81bd325c-2d20-4feb-b634-6a029a5949f8",
        "user": "rkibbyk",
        "title": "Nam dui.",
        "paragraph": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
        "id": "e756a56c-ac4b-4180-80ad-df54c753aed1",
        "user": "jmerseyl",
        "title": "Proin at turpis a pede posuere nonummy.",
        "paragraph": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
        "id": "c52afaba-914b-4b49-adfb-47772748b794",
        "user": "gbruntjenm",
        "title": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "paragraph": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
        "id": "1b7e4c2a-d715-4b4b-adcd-07c6bf4ea3bc",
        "user": "bcrewdsonn",
        "title": "Nullam varius.",
        "paragraph": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
        "id": "3c276d89-95d2-44f6-a167-e52ed6a9de8e",
        "user": "egormleyo",
        "title": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "paragraph": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
    }
]
app.use(express.json())

app.get("/auto", (request, response) => {
    const { value, search_options } = request.query
    if (value === "" || value === undefined) {
        response.status(200).json({ results: [] })
    }
    const property = corrigeOptions(search_options)

    const result = info.filter((e) => e[property].includes(value))

    response.status(200).json({ results: result })
})
function corrigeOptions(search_options) {
    if (

        search_options == "" &&
        search_options !== "user" &&
        search_options !== "id" &&
        search_options !== "title" &&
        search_options !== "paragraph"


    ) {
        return "title"
    } return search_options

}


app.listen(
    PORT,
    () => console.log(`A escuta em http://localhost:${PORT}`)
)