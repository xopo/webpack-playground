import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
import { run } from './app/app';

run(new AlertService(), new ComponentService());