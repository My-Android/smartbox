describe('Platform', function () {


    it('Supports events', function(){
        var spy=jasmine.createSpy();
        SB.on('event', spy);
        SB.trigger('event');
        expect(spy).toHaveBeenCalled();
    });


    it('Should supports ready', function () {
        var spy1=jasmine.createSpy(), spy2=jasmine.createSpy();
        runs(function(){
            SB.ready(function(){
                spy1();
                $$nav.on();
                $$log('log');
            });

        });

        waitsFor(function(){
            return spy1.calls.length!=0;
        }, 2000);


        runs(function(){
            SB.ready(spy2);
            expect(spy2).toHaveBeenCalled();
        });

    });

    it('Should detect native DUID', function () {
        expect(SB.getNativeDUID()).not.toBe('');
    });

    xit('Should detect platform', function () {
        $('body').prepend('<div style="color: #ffffff; background: #000000; position: relative; z-index: 1;">' + navigator.userAgent + '</div>')
        expect(SB.platformName).toBe('lg');
    });

    describe('Local storage', function () {

        afterEach(function () {
            localStorage.clear();
        });

        xit('Should have local Storage', function () {
            expect(window.localStorage).toBeDefined();
        });

        it('Shold save data', function () {
            localStorage.setItem('key', 'фывфывфыв');
            expect(localStorage.getItem('key')).toBe('фывфывфыв');
        });

        it('Should delete data', function () {
            localStorage.setItem('key', 'фывфывфыв');
            localStorage.removeItem('key');
            expect(localStorage.getItem('key')).toBeFalsy();
        });
    });

});