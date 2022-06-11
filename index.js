/**
  *   PostCSS Plugin List
  *
  *   A consolidated list of PostCSS Plugins
  *   for the community to share/export/use
  *
  *   Feel free to add and make changes!
  *
  *   Schema:  {
  *     name        : "name-of-plugin",
  *     url         : "http://cool-plugin-link.com",
  *     description : "It gives your CSS superpowers",
  *     tags        : [ 'colors', 'grids', 'lions', tigers', 'bears' ]
  *   }
  *
  */

// module.exports = require('./plugins.json');

function hasAlready (parent, selector) {
  return parent.some(i => {
    return i.type === 'rule' && i.selectors.includes(selector)
  })
}

module.exports = () => {
  return {
    postcssPlugin: 'pengkiw-study',
    Rule: rule => {
      if (rule.selector.includes(':hover')) {
        let focuses = []
        for (let selector of rule.selectors) {
          if (selector.includes(':hover')) {
            let replaced = selector.replace(/:hover/g, ':focus')
            if (!hasAlready(rule.parent, replaced)) {
              focuses.push(replaced)
            }
          }
        }
        if (focuses.length) {
          rule.selectors = rule.selectors.concat(focuses)
        }
      }
    }
  }
}
module.exports.postcss = true
