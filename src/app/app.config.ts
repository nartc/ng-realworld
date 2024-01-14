import {
	ApplicationConfig,
	ɵprovideZonelessChangeDetection as provideZonelessChangeDetection,
} from '@angular/core';

export const appConfig: ApplicationConfig = {
	providers: [provideZonelessChangeDetection()],
};
