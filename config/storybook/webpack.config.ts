import buildCssLoader from "../build/loaders/buildCssLoader"
import  webpack, { RuleSetRule }  from "webpack"


export default ({config}:{config: webpack.Configuration}) => {

    config.module.rules.push(buildCssLoader(true));
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    
    return config
}