import React from 'react';
import Link from '../shared/Link';
import _get from 'lodash/get';

function transformLanguages(language){
  if(language.length < 3){
    return language
  }
  else{
    var languagecap2 = language.charAt(language.length-1).toUpperCase()
    var languagecap1 = language.charAt(language.length-2).toUpperCase()
    language = language.substr(0,language.length-2);
    return language + languagecap1 + languagecap2;
  }
}

class LanguageSelection extends React.Component {
  changeLanguage(language){
    this.props.changeLanguage(language);
  }
  render(){
    const {
      languages,
      language,
      slug_nl,
      slug_nl_be,
      slug_en,
      slug_fr,
      slug_fr_be,
      changeLanguage
    } = this.props
  for (var i = 0; i < languages.length; i++) {
    if (languages[i].title == 'België' && slug_nl_be != undefined) {
      languages[i].slug.slugFinal = languages[i].slug.slug + '/' + slug_nl_be;
    } else if (languages[i].title == 'English' && slug_en != undefined) {
      languages[i].slug.slugFinal = languages[i].slug.slug + '/' + slug_en;
    } else if (languages[i].title == 'Belgique' && slug_fr_be != undefined) {
      languages[i].slug.slugFinal = languages[i].slug.slug + '/' + slug_fr_be;
    } else if (languages[i].title == 'France' && slug_fr != undefined) {
      languages[i].slug.slugFinal = languages[i].slug.slug + '/' + slug_fr;
    } else if (languages[i].title == 'Nederland' && slug_nl != undefined) {
      languages[i].slug.slugFinal = languages[i].slug.slug + '/' + slug_nl;
    } else {
      languages[i].slug.slugFinal = languages[i].slug.slug;
    }
  }
  return (
    <div className="language-selection-box">
      <ul className="language-options">
        {languages.map(
          (item, index) =>
            item && (
              <li key={index} className="language-option">
                <Link onClick={() => this.changeLanguage(transformLanguages(item.slug.slug))} to={item.slug.slugFinal}>
                  <div className="language-option__icon">
                    <img src={_get(item, 'image.file.url')} alt={item.title} />
                  </div>
                  <div className="language-option__label">{item.title}</div>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
}
export default LanguageSelection;
