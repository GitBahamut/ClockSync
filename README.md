# ClockSync
Source code and data sets created during a research paper set to test Cristian's algorithm
and find the optimal period of time between clock updates. Test data is given in order of
time between updates, ranging from 1s, 3s, 5s, 10s, 20s. Each test was ran for 2 minutes,
and the first value is ignored because of the client connecting after the server had been
started, so the first time difference is just the time between server startup and the client
joining.

Code dependencies:
Express and Node are required, look in package-lock.json for further information.
