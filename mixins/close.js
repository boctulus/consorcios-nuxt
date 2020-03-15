export default {
    created() {
        let that = this;

        console.log('AAAAAAAAAAAA!!!!!!!!!!!!!!!!!');

        document.addEventListener('keyup', function (evt) {
            if (evt.keyCode === 27) {
                that.close();
            }
        });
    },
};