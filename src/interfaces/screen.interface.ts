import {
    NavigationRouteConfigMap,
    NavigationSwitchProp,
} from 'react-navigation';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

export type ScreenWithNavigation<T> = NavigationStackScreenComponent<
    Partial<T>
>;

export type TCreateRoutesOptions = {
    customRoutes?: NavigationRouteConfigMap<{}, NavigationSwitchProp>;
};
