


// Due to loading order, we need to let the resource side know when *we* are ready.
// Just having the browser "loaded" isn't enough.
fetch(`https://${document.location.host}/duiIsReady`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ok: true})
})