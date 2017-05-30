function personConstructor(name) {
    this.name = name;
    this.distance_traveled = 0;
    this.say_name = function() {
        console.log(this.name);
    };
    this.say_something = function(msg) {
        if (msg === 'I am cool') {
            console.log(`${this.name} says I am cool`);
        }
    };
    this.walk = function() {
        console.log(`${this.name} is walking`);
        this.distance_traveled += 3;
    };
    this.run = function() {
        console.log(`${this.name} is running`);
        this.distance_traveled += 10;
    };
    this.crawl = function() {
        console.log(`${this.name} is crawling`)
        this.distance_traveled += 1;
    };

}

function ninja() {
    this.name = Brandon;
    this.cohort = 'NM-2017';
    this.beltLevel = 'yellow-belt';
    this.levelUp = function() {
        this.beltLevel = 'Black-belt';
    }
}