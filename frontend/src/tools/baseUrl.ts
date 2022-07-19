const apiUri = 'https://ophyra.netodos.com/backend/public/api'

export default function baseUrl(uri:string){
    return `${apiUri}${uri}`
}