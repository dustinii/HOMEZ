import decode from 'jwt-decode'

class AuthService {
    getprofile(){
        return decode(this.getToken());
    }

    loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token){
        try{
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch(err){
            return false;
        }
    }

    getToken(){
        return localStorage.getItem('id_token');
    }

    login(idToken){
        localStorage.setItem('idToken',idToken);
        window.location.assign('/')

    }
    logout(){
        localStorage.removeItem('idToken')
        window.location.reload();
    }
}

export default new AuthService();
