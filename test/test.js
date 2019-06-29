require('chai').should();

const SubstitutionCipher = require('../index.js');

describe('SubstitutionCipher', function() {
  const abc1 = 'abcdefghijklmnopqrstuvwxyz';
  const abc2 = 'etaoinshrdlucmfwypvbgkjqxz';
  const abc3 = 'mindjfobsgqzpkeayrtulcxvhw';

  it('should return an error if not passed a string', function () {
    const sub = new SubstitutionCipher(abc1, abc2);
    sub.encode([]).should.eql('Argument should be a string!');
    sub.decode({}).should.eql('Argument should be a string!');
  });

  it('should encode a string', function() {
    const sub = new SubstitutionCipher(abc1, abc2);
    for (let i = 0; i < 10000; i++) {
      sub.encode('abc').should.eql('eta');
    }
    sub.encode('a b c').should.eql('e t a');
    for (let i = 0; i < 10000; i++) {
        sub.encode('hello world!iauwhfiawughfiauwhfoauwhfoawufhoawifybaiwufytavwiufybawifuybawofiuawybfiawuyfbaiuyeftbaieufynaieufytbiaueyftbapeifguybaeoigutabepigunawepofiuybaweoufytawneçgifyenwiogutnegoiyaegnwoiuatbgpia').should.eql('hiuuf jfpuo!regjhnrejgshnregjhnfegjhnfejgnhfejrnxterjgnxbekjrgnxtejrngxtejfnrgejxtnrejgxntergxinbterignxmerignxbtregixnbtewirnsgxteifrsgbetiwrsgmejiwfnrgxtejifgnxbejmiçsrnximjrfsgbmisfrxeismjfrgebtswre');
    }
    const sub2 = new SubstitutionCipher(abc1, abc3);
    sub2.encode('codeworks rocks!').should.eql('nedjxerqt renqt!');
  });

  it('should decode a string', function() {
    const sub = new SubstitutionCipher(abc1, abc2);
    sub.decode('eta').should.eql('abc');
    sub.decode('e t a').should.eql('a b c');
    for (let i = 0; i < 10000; i++) {
      sub.decode('hiuuf jfpuo!regjhnrejgshnregjhnfegjhnfejgnhfejrnxterjgnxbekjrgnxtejrngxtejfnrgejxtnrejgxntergxinbterignxmerignxbtregixnbtewirnsgxteifrsgbetiwrsgmejiwfnrgxtejifgnxbejmiçsrnximjrfsgbmisfrxeismjfrgebtswre').should.eql('hello world!iauwhfiawughfiauwhfoauwhfoawufhoawifybaiwufytavwiufybawifuybawofiuawybfiawuyfbaiuyeftbaieufynaieufytbiaueyftbapeifguybaeoigutabepigunawepofiuybaweoufytawneçgifyenwiogutnegoiyaegnwoiuatbgpia');
    }
    sub.decode('hiuuf jfpuo!').should.eql('hello world!');
    const sub2 = new SubstitutionCipher(abc1, abc3);
    sub2.decode('nedjxerqt renqt!').should.eql('codeworks rocks!');
  });

});
