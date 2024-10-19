import { createContext } from 'react';
import { Issue } from '../types/Issue';

const IssuesContext = createContext<Issue[]>([]);

export default IssuesContext