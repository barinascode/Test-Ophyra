const apiUri = 'https://ophyra.netodos.com/backend/public'

export default function assetsUrl(uri:string){
    return `${apiUri}${uri}`
}