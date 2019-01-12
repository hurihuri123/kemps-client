interface IRoute {
    path: string,
    render?: (props: any) => React.ReactNode,
    exact?: boolean,
    title?: string,
    component?: any,
}

export default IRoute;