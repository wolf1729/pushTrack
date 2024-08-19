const url = 'https://api.api-ninjas.com/v1/quotes?category=success'

export async function quoteCall() {
    try{
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': 'onA1ook7FYhvJNIOxjbdrA==Xev4CIqy2FYhhQgA',
            }
        })
        const data = response.json()
        return data
    }
    catch(err) {
        console.log(err)
    }
}