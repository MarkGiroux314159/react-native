export function RenderIf(condition, component){
    if(condition){
        return component;
    }else{
        return null;
    }
}