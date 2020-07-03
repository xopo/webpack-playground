import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
import { run } from './app/app';
import './main.css';

run(new AlertService(), new ComponentService());