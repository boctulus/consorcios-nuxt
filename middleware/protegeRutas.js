export default function protegeRutas(context) {

    //console.log(context.store.state.auth.authUser);

    if (context.route.path.match(/^\/dashboard/) && context.store.state.auth.authUser.id == null) {
        context.store.commit('auth/set_alert', 'Acceso no autorizado'); 
        context.redirect('/login');
    }
}