
export default function protegeRutas(context) {
    console.log('MIDDLEWARE !!!!');
    console.log(context.store.getters['login/logged'])// {}

    /*
    if (context.route.path.match(/^\/dashboard/)){
       context.redirect('/login');
    }
    */
}